<template>
  <div id="app">
    <nav class="navbar navbar-expand-sm navbar-dark bg-primary">
      <router-link class="navbar-brand" to="/">Eric Kramer</router-link>
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/about">About</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/contact">Contact</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/findAHome">Find a Home</router-link>
        </li>
      </ul>
      
    </nav>
    <router-view/>
  </div>
</template>

<style>
body {
  color: #fff;
}
nav li {
  display: inline-block;
}
</style>
