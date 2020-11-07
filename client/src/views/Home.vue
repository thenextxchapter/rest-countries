<template>
  <div class="home">
    <Heading />
    <Input />
    <Cards />
  </div>
</template>

<script>
// @ is an alias to /src
import Cards from "../components/Cards";
import Heading from "../components/Heading";
import Input from "../components/Input";

export default {
  name: "Home",
  components: {
    Input,
    Cards,
    Heading
  }
};
</script>
