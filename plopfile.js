module.exports = function(plop, config) {

  const cfg = Object.assign({
    sourcePath: './'
  }, config || {});

  plop.setHelper('ifEquals', (arg1, arg2, options) => {
    return (arg1 === arg2) ? options.fn(this): options.inverse(this);
  });
  plop.setGenerator('make:component', {
    description: 'Create Cyborg Component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name?'
      },
      {
        type: 'confirm',
        name: 'comments',
        default: false,
        message: 'Want helper comments?'
      },
      {
        type: 'list',
        name: 'statement',
        choices: ['None', 'Switch statement', 'If statement'],
        message: 'What kind of statement you want in handleNotifications?'
      },
      {
        type: 'confirm',
        name: 'onload',
        default: false,
        message: 'Want an onload handler?'
      },
      {
        type: 'confirm',
        name: 'destroy',
        default: false,
        message: 'Want a destroy method?'
      }],
    actions: [{
      type: 'add',
      path: cfg.sourcePath + '{{pascalCase name}}Component.js',
      templateFile: 'plop-templates/component.hbs'
    }]
  });
  plop.setGenerator('make:motherboard', {
    description: 'Create Cyborg Component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'MotherBoard name?'
      }],
    actions: [{
      type: 'add',
      path: cfg.sourcePath + '{{pascalCase name}}.js',
      templateFile: 'plop-templates/motherboard.hbs'
    }]
  });
};
