<template>
  <div>
    <h1>All this content will be pre-rendered upon project build</h1>
    <h2>All facebook/google tracking codes will be excluded from pre-render</h2>
    <p>This will halp generate a proper dom tree without compiled/injected versions of the tracking scripts.</p>
    <p>Also this will minimize the compiled code.</p>
    <p>Supported trackings:</p>
    <ul>
      <li>Google tag manager</li>
      <li>Facebook pixel</li>
      <li>Zendesk</li>
    </ul>
    <hr>
    <ul>
      <li>
         <router-link to="/">
           Home
         </router-link>
      </li>
      <li>
         <router-link to="/test-page">
           Test page
         </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TestPage',
  data() {
    return {
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
