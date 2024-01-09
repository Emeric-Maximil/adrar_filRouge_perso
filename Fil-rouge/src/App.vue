<template>
  <div id="app">
    <div class="app">
      <nav>
        <router-link to="/"><a href="#"> Home - </a></router-link>
        <router-link to="/characters"><a href="#"> Liste - </a></router-link>
        <router-link to="/add"><a href="#"> Add </a></router-link>

        <router-view />
      </nav>
    </div>
  </div>
</template>