import { trigger } from './Content.js'

//when extentsion is triggered, bank balance will display
if (trigger !== undefined || trigger === true) {
  axios.post('http://localhost:5000/user_balance', json, {
    headers: {
      'Content-Type': 'application/json'
    }}
    ).then(response => {
      const accountsList = document.createElement('ul');
      response.data.forEach(account => {
      const accountItem = document.createElement('li');
      accountItem.innerHTML = `Account Type: ${account.type}, Balance: ${account.balance}`;
      accountsList.appendChild(accountItem);
      });
      document.body.appendChild(accountsList);
    })
    .catch(error => {
      console.error(error);
  });
};