const nav = document.querySelector('#main');
let topOfNav = nav.offsetTop;

  function fixNav() {
    if (window.scrollY >= topOfNav) {
      document.body.style.paddingTop = nav.offsetHeight + 'px';
      document.body.classList.add('fixed-nav');
    } else {
      document.body.classList.remove('fixed-nav');
      document.body.style.paddingTop = 0;
    }
  }

  /*
  * The returningForm() function is used to print the form,
  * that is being completed by the user.
  *
  *                         FORMAT
  * Full Name: _________   Class: _________     Race: _________
  * Age: ___               Alignment: _____________
  * Sex: _________
  *
  * (BACKSTORY GOES HERE)
  */
  function returningForm() {
    let age = parseFloat(document.getElementById('age').value);
    let firstname = document.getElementById('firstname').value;
    let lastname = document.getElementById('lastname').value;
    let race = document.getElementById('race').value;
    let backStory = document.getElementById('textstory').value;
    let alignment = document.getElementById('alignment').value;
    let sex = document.getElementById('sex').value;
    let charClass = document.forms[0];
    let char_class = null;

    let fullname_txt;

    for (var i = 0; i < charClass.length; i++) {
      if (charClass[i].checked) {
        char_class = charClass[i].value;

      }
    }

    if (char_class !== null) {
      fullname_txt = firstname + " " + lastname;

      let spc = '&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp';
      let spc2 = '&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp';

      document.getElementById("completeform").innerHTML = "Full Name: " + fullname_txt
      + spc + "Class: " + char_class + spc + "Race: " + race + '<br>' + "Age: " + age +
      spc + spc + spc2 + "Alignment: " + alignment + '<br>' + "Sex: " + sex;
      document.getElementById("backstory").innerHTML = backStory;
    } else {
      console.log('char_class');
    }

  }

  /*
  * This methods resets the final form writen under.
  */
  function reset() {
    document.getElementById("completeform").innerHTML = "";
    document.getElementById("backstory").innerHTML = "";
  }

window.addEventListener('scroll', fixNav);
