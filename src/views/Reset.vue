<template>
    <div class="reset">
        <!-- navbar -->
    <div class="container">
        <nav class="row navbar navbar-expand-lg navbar-light bg-white">
            <div class="navbar-nav ml-auto mr-auto mr-sm-auto mr-lg-0 mr-md-auto">
                <a href="#" class="navbar-brand">
                    <img class="logo" src="frontend/images/logo.png" alt="logo" />
                </a>
            </div>
            <ul class="navbar-nav mr-auto d-none d-lg-block">
                <li>
                    <span class="text-muted">
                        | &nbsp; Find The Best Fit
                    </span>
                </li>
            </ul>
        </nav>
    </div>

    <main>
        <section class="section-verify d-flex align-items-center">
            <div class="col text-center">
                <img class="forgot" src="frontend/images/reset-password.jpg" alt="">
                <h1>Please Check Your Email to Reset Your Password</h1>
            </div>
        </section>
    </main>
    </div>
</template>

<script>
export default {
    name: "ResetPasswordView",
}
</script>

<style scoped>
*{
    background-color: #fff;
}
</style>