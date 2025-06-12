<template>
  <footer class="footer">
    <div class="footer__main">

      <router-link to="/">
        <img :src="logo" class="footer__logo" alt="Logo" />
      </router-link>

      <div>
        <h3>Brzi linkovi</h3>
        <ul>
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/usluge">Usluge</router-link>
          </li>
          <li>
            <router-link to="/o-meni">O meni</router-link>
          </li>
        </ul>
      </div>

      <div>
        <h3>Informacije</h3>
        <ul>
          <li>
            <router-link to="/cjenik">Cjenik</router-link>
          </li>
          <li>
            <router-link to="/radno-vrijeme">Radno vrijeme</router-link>
          </li>
          <li>
            <router-link to="/cesto-postavljana-pitanja">Često postavljana pitanja</router-link>
          </li>
          <li>
            <router-link to="/informacije-o-tvrtki">Informacije o tvrtki</router-link>
          </li>
          <li>
            <router-link to="/opci-uvjeti-koristenja">Opći uvjeti korištenja</router-link>
          </li>
          <li>
            <router-link to="/politika-kolacica">Politika kolačića</router-link>
          </li>
          <li>
            <router-link to="/politika-privatnosti">Politika privatnosti</router-link>
          </li>
        </ul>
      </div>

      <div>
        <h3>Kontakt</h3>
        <ul>
          <li>
            <img :src="personIcon" alt="Person icon" />Danijela Premor, bacc. physioth
          </li>
          <li>
            <img :src="locationIcon" alt="Location icon" />Adresa: III Ravnice 14, 10000, Zagreb
          </li>
          <li>
            <img :src="mailIcon" alt="Mail icon" />Email: fizio.instatera@gmail.com
          </li>
          <li>
            <img :src="phoneIcon" alt="Phone icon" />Telefon: +385955053943
          </li>
        </ul>
      </div>
    </div>

    <div class="footer__bottom">
      <p>In Statera, obrt za usluge ©</p>
      <p>&copy; 2025 Tomile</p>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import phoneIcon from '@/assets/phone.svg';
import mailIcon from '@/assets/mail.svg';
import locationIcon from '@/assets/location.svg';
import personIcon from '@/assets/person.svg';
import logo from '@/assets/instatera-manikin.svg'
</script>

<style scoped>
  footer {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    color: var(--color-text);
    gap: 20px;
  }

  ul, li {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 5px;
  }

  a {
    color: var(--color-link-footer);
  }

  a:hover {
    color: var(--color-green-light);
  }

  .footer__logo {
    width: 100px;
  }

  .footer__main {
    padding: 50px;
    display: flex;
    justify-content: space-between;
    border-radius: 15px;
    flex-direction: column;
    //background-color: #5C635B;
    //background-color:#847F7E;
    //background: #13A57466;
    //background-color:#8F4A38;
    //background: #15674f;
    //background: #13A574;
    //background: #15674f;
    //background: #F9FAFBFF;
    //background: #111827FF;
    color:  #030712FF;

    @media screen and (min-width: 1024px) {
      flex-direction: row;
    }

    h3 {
      color: #E87A5D;


    }


    a {
      color:  #030712FF;
      //color: #13A574;
    }
  }

  .footer__bottom {
    padding: 10px 50px;
    background-color: #B9B8A8;
    background-color: #8F9779;
    background: #15674f;
    background: #13A574;
    background: #15674f;
    background: #F9FAFBFF;
    background: #111827FF;
    background:  #030712FF;

    background: #13A57466;
    //background-color:#8F4A38;
    background-color: #E87A5D;

    //background-color: #C6AE8C;






    //background-color: #B2B6AB;

    //background-color: #DDC6AD;
    //background-color: #8F9779;
    //background-color:#C6AE8C;



    color: var(--color-text);
    border-radius: 15px;
    display: flex;
    justify-content: space-between;
  }
</style>