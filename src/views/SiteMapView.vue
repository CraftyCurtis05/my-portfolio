<template>
    <head>
      <title>About | J.Curtis Portfolio</title>
    </head>
  
    <header id="top">
      <Header/>
    </header>
  
    <body>
      <main>
        <h4>Under construction—good things take time!</h4>
      </main>
    </body>
  
    <footer>
      <Footer/>
    </footer>
</template>
  
<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
    name: "AboutView",
    components: { 
      Header,
      Footer
    }
};
</script>
  
<style scoped>
body {
    min-height: 31vh;
  background-color: #dadae2;
}

main {
    text-align: center;
    margin: 2vw auto;
}
</style>