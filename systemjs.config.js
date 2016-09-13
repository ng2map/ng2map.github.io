(function(global) {
  var map = {
    app: "app",
    '@angular': 'https://unpkg.com/@angular', // sufficient if we didn't pin the version
    'rxjs': 'https://unpkg.com/rxjs@5.0.0-beta.6'
  };
  var packages = {
    app: { main: './main.ts', defaultExtension: 'ts' },
    '@angular/common': { main: 'bundles/common.umd.js', defaultExtension: 'js' },
    '@angular/compiler': { main: 'bundles/compiler.umd.js', defaultExtension: 'js' },
    '@angular/core': { main: 'bundles/core.umd.js', defaultExtension: 'js' },
    '@angular/forms': { main: 'bundles/forms.umd.js', defaultExtension: 'js' },
    '@angular/router': { main: 'bundles/router.umd.js', defaultExtension: 'js' },
    '@angular/http': { main: 'bundles/http.umd.js', defaultExtension: 'js' },
    '@angular/platform-browser': { main: 'bundles/platform-browser.umd.js', defaultExtension: 'js' },
    '@angular/platform-browser-dynamic': { main: 'bundles/platform-browser-dynamic.umd.js', defaultExtension: 'js' },
    rxjs: { defaultExtension: 'js' }
  };

  map['ng2-map'] = 'https://unpkg.com/ng2-map/dist';
  packages['ng2-map'] = {main: 'index.js', defaultExtension: 'js'};

  System.config({
    transpiler: 'typescript', //use typescript for compilation
    typescriptOptions: {      //typescript compiler options
      emitDecoratorMetadata: true
    },
    map: map,
    packages: packages
  });
})(this);