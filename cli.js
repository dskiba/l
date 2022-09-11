const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('Name of the link? ', function (link) {
  rl.question('Description? ', function (description) {
    rl.question('Redirect to where? ', async (redirectLink) => {
      await createRedirectHTML({link, description, redirectLink})
      console.log('Redirect HTML file was saved!')
      rl.close();
    })

  });
});

rl.on('close', function () {
  console.log('\nBYE BYE !!!');
  process.exit(0);
});


async function createRedirectHTML({link, description, redirectLink}) {
  const htmlStr = `
  <meta charset="utf-8">
  <title>${description}</title>
  <meta http-equiv="refresh" content="0; URL=${redirectLink}">
  <link rel="canonical" href="${redirectLink}">
  `

  fs.writeFileSync(`./links/${link}.html`, htmlStr);
}
