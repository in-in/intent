module.exports = function (grunt) {
  'use strict';
  require('time-grunt')(grunt);
  grunt.initConfig({
    watch: {
      sass: {
        files: "src/scss/**/*.scss",
        tasks: ['sass:dev', 'autoprefixer']
      },
      jade: {
        files: "src/jade/**/*.jade",
        tasks: ['jade']
      },
      svg: {
        files: 'src/img/svg/*.svg',
        tasks: ['newer:svgmin', 'svgstore']
      }
    },
    
    sass: {
      dev: {
        options: {
          includePaths: [
            'node_modules/normalize-libsass/',
            'src/scss/',
            'src/scss/base/',
            'src/scss/layout/',
            'src/scss/module/',
            'src/scss/utilities/'
          ],
          outputStyle: 'nested',
          imagePath: '../img'   //note: эта штука работает?
        },
        files: {
          "src/css/style.css": "src/scss/index.scss"
        }
      }
    },
    
    autoprefixer: {
      dev: {
        options: {
          browsers: ['last 1 version']
        },
        files: [{
          src: 'src/css/style.css'
        }]
      }
    },
    
    jade: {
      dev: {
        options: {
          pretty: true
        },
        files: {
          "src/index.html": "src/jade/*.jade"
        }
      }
    },
    
    browserSync: {
      default_options: {
        bsFiles: {
          src: [
            "src/css/*.css",
            "src/*.html"
          ]
        },
        options: {
          watchTask: true,
          port: 3008,
          notify: false,
          injectChanges: true,
          open: true,
          ui: false,
          browser: "chromium-browser",
          server: {
            baseDir: "src"
          }
        }
      }
    },

//SVG

    svgmin: {
      options: {
        plugins: [
          {removeViewBox: false},
          {removeUselessStrokeAndFill: false},
          {removeMetadata: true}
        ]
      },
      dev: {
        files: [
          {
            expand: true,
            cwd: 'src/img/svg/',
            src: ['*.svg'],
            dest: 'src/img/svgmin/',
            ext: '.min.svg'
          }
        ]
      }
    },
    
    svgstore: {
      options: {
        cleanup: true,
        cleanupdefs: true,
        prefix: 'icon-',
        svg: {
          style: "display: none;"
        }
      },
      dev: {
        files: {
          'src/img/svg-def.svg': ['src/img/svgmin/*.min.svg']
        }
      }
    },

    //    CSSCOMB

    csscomb: {
      dev: {
        options: {
          config: '.csscomb.json'
        },
        files: [{
          expand: true,
          cwd: 'src/scss',
          src: ['**/*.scss',
                '!**/_utilities.scss',
                '!**/_vars.scss',
                '!**/_module.scss'
               ],
          dest: 'src/scss/',
          ext: '.scss'
        }]
      }
    },
    
// UNCSS
    
    uncss: {
      dist: {
        options: {
          ignore: ['#added_at_runtime', '.created_by_jQuery']
        },
        files: {
          'src/css/style.css': ['src/index.html']
        }
      }
    },

// BUILD TASKS


    clean: {
      build: {
        src: ["build"]
      }
    },
    
    copy: {
      build: {
        files: [
          {
            expand: true,
            cwd: 'src/',
            src: [
              '**',
              '!**/scss/**',
              '!**/jade/**',
              '!**/svg*/**', //note: работает как я думал
            ],
            dest: 'build/'
          }
        ]
      }
    },
    
    cssmin: {
      build: {
        files: {
          'build/css/style.css': ['build/css/style.css']
        }
      }
    },
    
    htmlmin: {
      build: {
        options: {
          removeComments: true,
          collapseWhitespace: true,
          removeCommentsFromCDATA: true,
          removeEmptyAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true
        },
        files: {
          'build/index.html': 'build/index.html'
        }
      }
    },
    
    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'src/img/**', //note: папку pic она заглядывает
          src: ['**/*.{png,jpg,gif}'],
          dest: 'build/img/'
        }]
      }
    },
    
//PUBLISH ON GITHUB PAGES

    'gh-pages': {
      options: {
        base: 'build'
      },
      src: ['**']
    }
  });
  
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-csscomb');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-svgstore');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-svgmin');
  grunt.loadNpmTasks('grunt-newer');
  grunt.loadNpmTasks('grunt-gh-pages');
  grunt.loadNpmTasks('grunt-uncss');

  grunt.registerTask('comb', ['newer:csscomb']);
  grunt.registerTask('svg', ['newer:svgmin:dev', 'svgstore']);
  grunt.registerTask('build', [
    'clean',
    'copy',
    'cssmin',
    'htmlmin',
    'imagemin'
  ]);
  grunt.registerTask('default', [
    'browserSync',
    'watch'
  ]);
};