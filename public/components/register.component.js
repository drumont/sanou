
;(function () {
    'use strict'

    const signinTemplate =  ` 
        <section id="register">
            <!-- Material form register -->
            <div class="card offset-6 col-md-4 py-5 px-5 z-depth-4">

                <h5 class="card-header info-color white-text text-center py-4">
                    <strong>Sign up</strong>
                </h5>

                <!--Card content-->
                <div class="card-body px-lg-5 pt-0">

                    <!-- Form -->
                    <form class="text-center" style="color: #757575;">

                        <div class="form-row">
                            <div class="col">
                                <!-- First name -->
                                <div class="md-form">
                                    <input type="text" id="materialRegisterFormFirstName" class="form-control" placeholder="Prenom">
                                </div>
                            </div>
                            <div class="col">
                                <!-- Last name -->
                                <div class="md-form">
                                    <input type="email" id="materialRegisterFormLastName" class="form-control" placeholder="nom">
                                </div>
                            </div>
                        </div>

                        <!-- E-mail -->
                        <div class="md-form mt-0">
                            <input type="email" id="materialRegisterFormEmail" class="form-control" placeholder="Mail">
                        </div>

                        <!-- Password -->
                        <div class="md-form">
                            <input type="password" id="materialRegisterFormPassword" class="form-control" aria-describedby="materialRegisterFormPasswordHelpBlock" placeholder="Mot de passe">
                            <small id="materialRegisterFormPasswordHelpBlock" class="form-text text-muted mb-4">
                                At least 8 characters and 1 digit
                            </small>
                        </div>

                        <!-- Phone number -->
                        <div class="md-form">
                            <input type="password" id="materialRegisterFormPhone" class="form-control" aria-describedby="materialRegisterFormPhoneHelpBlock">
                            <label for="materialRegisterFormPhone">Phone number</label>
                            <small id="materialRegisterFormPhoneHelpBlock" class="form-text text-muted mb-4">
                                Optional - for two step authentication
                            </small>
                        </div>

                        <!-- Newsletter -->
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="materialRegisterFormNewsletter">
                            <label class="form-check-label" for="materialRegisterFormNewsletter">Subscribe to our newsletter</label>
                        </div>

                        <!-- Sign up button -->
                        <button class="btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0" type="submit">Se Connecter</button>

                        <!-- Social register -->
                        <p>or sign up with:</p>

                        <a type="button" class="btn-floating btn-fb btn-sm">
                            <i class="fa fa-facebook"></i>
                        </a>
                        <a type="button" class="btn-floating btn-tw btn-sm">
                            <i class="fa fa-twitter"></i>
                        </a>
                        <a type="button" class="btn-floating btn-li btn-sm">
                            <i class="fa fa-linkedin"></i>
                        </a>
                        <a type="button" class="btn-floating btn-git btn-sm">
                            <i class="fa fa-github"></i>
                        </a>

                        <hr>

                        <!-- Terms of service -->
                        <p>By clicking
                            <em>Sign up</em> you agree to our
                            <a href="" target="_blank">terms of service</a> and
                            <a href="" target="_blank">terms of service</a>. </p>

                    </form>
                    <!-- Form -->

                </div>

            </div>
            <!-- Material form register -->
        </section>
        `


    Vue.component('register', {
        template: signinTemplate
    })

})()

