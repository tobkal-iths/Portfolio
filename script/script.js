onload = function() {
    navigateToAbout();
}

function navigateByFile() {
    let reader = new FileReader();
    let path = '/pages/test.html'
    let txt = 'empty';
    reader.onload = function(e) {
        // The file's text will be printed here
        txt = e.target.result;
      };

    document.getElementById('contentArea').innerHTML = txt;
}

function navigateToAbout() {
    document.getElementById('contentArea').innerHTML = `
    <div class="container m-1 py-2">
                <div class="row">
                    <!-- Introduction -->
                    <div class="col-8 col-md-9">
                        <h class="display-5">Introduction</h>
                        <p class="border-start border-info border-4 mt-3 ps-3 fs-2 fs-md-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis deleniti corporis, quia possimus magni repellendus ducimus. Odit cum cupiditate corrupti!</p>
                        <p class="fs-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illo sint iusto? Eveniet vitae obcaecati, culpa, corporis, iste ea nesciunt eaque soluta dolores odio quibusdam. Molestiae, voluptatum numquam obcaecati vero amet, iure accusamus id ipsam blanditiis similique quis sunt modi libero quaerat sed harum repudiandae ex asperiores quibusdam cupiditate itaque.</p>
                    </div>
                    <!-- Portrait -->
                    <div class="col-4 col-md-3">
                        <img src="/assets/portrait/portrait_800.png" alt="Portrait" class="img-fluid border border-primary border-4 mt-4">
                    </div>
                </div>
            </div>
            <!-- Experience -->
            <div class="container m-1 py-2">
                <h class="display-5">Experience</h>
                <p class="border-start border-info border-4 mt-3 ps-3 fs-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis deleniti corporis, quia possimus magni repellendus ducimus. Odit cum cupiditate corrupti!</p>
                <p class="fs-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illo sint iusto? Eveniet vitae obcaecati, culpa, corporis, iste ea nesciunt eaque soluta dolores odio quibusdam. Molestiae, voluptatum numquam obcaecati vero amet, iure accusamus id ipsam blanditiis similique quis sunt modi libero quaerat sed harum repudiandae ex asperiores quibusdam cupiditate itaque.</p>
            </div>
            <!-- Education -->
            <div class="container m-1 py-2">
                <h class="display-5">Education</h>
                <p class="border-start border-info border-4 mt-3 ps-3 fs-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis deleniti corporis, quia possimus magni repellendus ducimus. Odit cum cupiditate corrupti!</p>
                <p class="fs-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illo sint iusto? Eveniet vitae obcaecati, culpa, corporis, iste ea nesciunt eaque soluta dolores odio quibusdam. Molestiae, voluptatum numquam obcaecati vero amet, iure accusamus id ipsam blanditiis similique quis sunt modi libero quaerat sed harum repudiandae ex asperiores quibusdam cupiditate itaque.</p>
            </div>
            <!-- Hobbies -->
            <div class="container m-1 py-2">
                <h class="display-5">Hobbies</h>
                <p class="border-start border-info border-4 mt-3 ps-3 fs-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis deleniti corporis, quia possimus magni repellendus ducimus. Odit cum cupiditate corrupti!</p>
                <p class="fs-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illo sint iusto? Eveniet vitae obcaecati, culpa, corporis, iste ea nesciunt eaque soluta dolores odio quibusdam. Molestiae, voluptatum numquam obcaecati vero amet, iure accusamus id ipsam blanditiis similique quis sunt modi libero quaerat sed harum repudiandae ex asperiores quibusdam cupiditate itaque.</p>
            </div>
    `;
}

function navigateToCV() {
    document.getElementById('contentArea').innerHTML = `<p>CV</p>`;
}