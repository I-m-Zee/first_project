<script>
export default {
    name: "MultipleTwoWayBinding",
    data() {
        return {
            selectedSports: [],
            selectedPlayer: ''
        }
    },
    props: {
        test: String,
        getData: Function,
        techStack: Object,
        techStacks: Object
    },
     methods: {
        onClickButton() {
            this.$emit('clicked', 'someValue')
        }
    }
}
</script>
<template>
     <h3>From Parnet: {{ test }}</h3>
   <!-- <button type="button" @click="getData">Click Me</button>
    <button type="button" @click="onClickButton()">Click Parent for Child</button>
    <h1>Multiple Two Way Binding</h1>
    <label for="sport" class="sport">Select Sports</label>
    <br>
    <label for="cricket">Cricket</label>
    &nbsp;
    <input type="checkbox" name="cricket" id="cricket" v-model="selectedSports" value="cricket">
    <br>
    <label for="football">FootBall</label>
    &nbsp;
    <input type="checkbox" name="football" id="football" v-model="selectedSports" value="football">
    <br>
    <label for="vollyBall">Volly Ball</label>
    &nbsp;
    <input type="checkbox" name="vollyBall" id="vollyBall" v-model="selectedSports" value="vollyBall">
    <br>
    <label for="rugby">Rugby</label>
    &nbsp;
    <input type="checkbox" name="rugby" id="rugby" v-model="selectedSports" value="rugby">
    <br>
    <label for="name">Select Player</label>
    <br>
    <label for="first">First</label>
    &nbsp;
    <input type="radio" name="selectedPlayer" id="name" v-model="selectedPlayer" value="First">
    <br>
    <label for="second">Second</label>
    &nbsp;
    <input type="radio" name="selectedPlayer" id="name" v-model="selectedPlayer" value="Second">
    <br>
    <label for="third">Third</label>
    &nbsp;
    <input type="radio" name="selectedPlayer" id="name" v-model="selectedPlayer" value="Third">
    <br>
    <label for="fourth">Fourth</label>
    &nbsp;
    <input type="radio" name="selectedPlayer" id="name" v-model="selectedPlayer" value="Fourth">
    <div>
        <h2>Selected Sports are: {{ selectedSports }}</h2>
        <h2>Selected Player is: {{ selectedPlayer }}</h2>
    </div>
    <div v-for="tech in techStack" :key="tech">
        {{ tech }}
    </div>
    <div v-for="tech in techStacks" :key="tech">
        {{ tech.lang }} | {{ tech.type }}
    </div> -->
</template>
<style>
.sport {
    font-size: x-large;
    color: blue;
    font-weight: bold;
}
</style>