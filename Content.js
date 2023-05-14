const userSpecified = document.getElementById("websites");
const shoppingDomains = ['www.amazon.com', 'www.walmart.com', 'www.target.com', 'www.bestbuy.com', 'www.ebay.com', 
'www.etsy.com', 'www.zappos.com', 'www.nordstrom.com', 'www.macys.com', 'www.kohls.com', 'www.jcpenney.com', 
'www.gap.com', 'www.oldnavy.com', 'www.bananarepublic.com', 'www.asos.com', 'www.zara.com', 'www.forever21.com', 
'www.hm.com', 'www.sephora.com', 'www.ulta.com'];

if (trigger()) {
    document.body.innerHTML = "<h1>Stop</h1>";
}

function validate()
{
    const website = userSpecified.value;
    console.log(website);
    if (is_domain(website) != true) {
        alert("Please enter a valid domain");
    } else {
        if(!shoppingDomains.includes(website)) shoppingDomains.push(website);
        console.log(shoppingDomains);
    }

}

function is_domain(str)
{
    regexp = /^[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,6}$/i;
  
        if (regexp.test(str))
          {
            return true;
          }
        else
          {
            return false;
          }
}


function trigger() {
    let triggered = false;
    console.log("website: " + window.location.hostname)
    if (shoppingDomains.includes(window.location.hostname)) {
        triggered = true;
    }
    console.log("triggered: " + triggered);
    return triggered;
}