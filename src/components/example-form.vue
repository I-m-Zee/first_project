<template>
    <div class="form-body">
        <div class="row">
            <div class="form-holder">
                <h1>Example Form</h1>
                <div class="form-content">
                    <div class="form-items">
                        <h3>Register Today</h3>
                        <p>Fill in the data below.</p>
                        <form class="requires-validation" novalidate>
                            <div class="col-md-12">
                                <input class="form-control" type="text" name="name" placeholder="Full Name"
                                    v-model="form.name" >
                            </div>
                            <div class="col-md-12">
                                <input class="form-control" type="email" name="email" placeholder="E-mail Address"
                                    v-model="form.email">

                            </div>
                            <div class="col-md-12">
                                <select class="form-select mt-3" v-model="form.position">
                                    <option selected disabled value="">Position</option>
                                    <option value="jweb">Junior Web Developer</option>
                                    <option value="sweb">Senior Web Developer</option>
                                    <option value="pmanager">Project Manager</option>
                                </select>
                            </div>
                            <div class="col-md-12">
                                <input class="form-control" type="password" name="password" placeholder="Password"
                                    v-model="form.password" >
                            </div>
                            <div class="col-md-12 mt-3">
                                <label class="mb-3 mr-1" for="gender">Gender: </label>
                                <input type="radio" class="btn-check" name="gender" id="male"  value="male"
                                    v-model="form.gender">
                                <label class="btn btn-sm btn-outline-secondary" for="male">Male</label>
                                <input type="radio" class="btn-check" name="gender" id="female" value="female"
                                    v-model="form.gender">
                                <label class="btn btn-sm btn-outline-secondary" for="female">Female</label>
                                <input type="radio" class="btn-check" name="gender" id="secret" value="secret"
                                    v-model="form.gender">
                                <label class="btn btn-sm btn-outline-secondary" for="secret">Secret</label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="invalidCheck"
                                    v-model="form.terms">
                                <label class="form-check-label">I confirm that all data are correct</label>
                            </div>
                            <div class="form-button mt-3">
                                <button id="submit" type="button" class="btn btn-primary" @click="showData">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            form: {
                name: '',
                email: '',
                position: '',
                password: '',
                gender: '',
                terms: false

            }
        }
    },
    methods: {
        showData() {
            console.log(this.form)
        }
    }
}
</script>
<style scoped>
/* @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700;900&display=swap'); */
h1 {
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    color: burlywood;
}

*,
body {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;

}

html,
body {
    height: 100%;
    background-color: #152733;
    overflow: hidden;

}


.form-holder {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    min-height: 100vh;

}

.form-holder .form-content {
    position: relative;
    text-align: center;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-align-items: center;
    align-items: center;
    padding: 60px;
    border: 1px solid #220670;
}

.form-content .form-items {
    border: 3px solid #158dd3;
    padding: 40px;
    display: inline-block;
    width: 100%;
    min-width: 540px;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    text-align: left;
    -webkit-transition: all 0.4s ease;
    transition: all 0.4s ease;
}

.form-content h3 {
    color: #5d5bce;
    text-align: left;
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 5px;
}

.form-content h3.form-title {
    margin-bottom: 30px;
}

.form-content p {
    color: #c3d336;
    text-align: left;
    font-size: 17px;
    font-weight: 300;
    line-height: 20px;
    margin-bottom: 30px;
}


.form-content label,
.was-validated .form-check-input:invalid~.form-check-label,
.was-validated .form-check-input:valid~.form-check-label {
    color: #220670;
}

.form-content input[type=text],
.form-content input[type=password],
.form-content input[type=email],
.form-content select {
    width: 100%;
    padding: 9px 20px;
    text-align: left;
    border: 0;
    outline: 0;
    border-radius: 6px;
    background-color: #fff;
    font-size: 15px;
    font-weight: 300;
    color: #8D8D8D;
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
    margin-top: 16px;
}


.btn-primary {
    background-color: #59c527;
    outline: none;
    border: 0px;
    box-shadow: none;
}

.btn-primary:hover,
.btn-primary:focus,
.btn-primary:active {
    background-color: #3391e4;
    outline: none !important;
    border: none !important;
    box-shadow: none;
}

.form-content textarea {
    position: static !important;
    width: 100%;
    padding: 8px 20px;
    border-radius: 6px;
    text-align: left;
    background-color: #9fc267;
    border: 0;
    font-size: 15px;
    font-weight: 300;
    color: #8D8D8D;
    outline: none;
    resize: none;
    height: 120px;
    -webkit-transition: none;
    transition: none;
    margin-bottom: 14px;
}

.form-content textarea:hover,
.form-content textarea:focus {
    border: 0;
    background-color: #6cd157;
    color: #8D8D8D;
}

.mv-up {
    margin-top: -9px !important;
    margin-bottom: 8px !important;
}

.invalid-feedback {
    color: #ff606e;
}

.valid-feedback {
    color: #2acc80;
}</style>