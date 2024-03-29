
/**
 * @param {import('plop').NodePlopAPI} plop
 */
function plopfile(plop) {
  plop.setHelper(
    'getName',
    (text) => text.match(/problems\/([^/]*)?\/?$/)[1]
  )

  // controller generator
  plop.setGenerator('solution', {
    description: 'solution template',
    prompts: [
      {
        type: 'input',
        name: 'url',
        message: 'leetcode question url',
      },
      {
        type: 'input',
        name: 'order',
        message: 'Order Number',
        default: '0',
      },
      {
        type: 'list',
        name: 'difficulty',
        message: 'select difficulty',
        choices: ['simple', 'medium', 'hard'],
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/solution/{{difficulty}}/{{order}}.{{getName url}}.md',
        templateFile: 'plop-templates/solution.hbs',
      },
    ],
  })
}

module.exports = plopfile
