class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ `
    <footer class="w-full pt-16 pb-11 rounded-t-[4rem] bg-light-blue relative z-10 text-white">
        <div class="main-container-sm">
            <section class="flex flex-col justify-between gap-10 pb-6 border-b border-white md:items-center md:flex-row">
                <img src="./images/logo-white.png" alt="" width="220" />
                <div class="flex gap-x-4 social-link">
                    <button id="modal-toggle" class="flex items-center justify-center w-10 h-10 border border-white rounded-full">
                        <i class="fa-brands fa-facebook"></i>
                    </button>
                    <a href="" class="flex items-center justify-center w-10 h-10 border border-white rounded-full">
                        <i class="fa-brands fa-twitter"></i>
                    </a>
                    <a href="" class="flex items-center justify-center w-10 h-10 border border-white rounded-full">
                        <i class="fa-brands fa-youtube"></i>
                    </a>
                    <a href="" class="flex items-center justify-center w-10 h-10 border border-white rounded-full">
                        <i class="fa-brands fa-line"></i>
                    </a>
                </div>
        </section>
            <section class="mx-auto flex justify-between text-lg py-8 gap-x-16 gap-y-8 flex-wrap [&_a]:font-medium [&_div:not(:last-of-type)_a]:opacity-60 [&_div:not(:last-of-type)_a:hover]:opacity-100">
                <div class="flex flex-col gap-y-2 shrink-0">
                <div class="text-2xl font-bold">Menu</div>
                <a href="../index.html" class="${pathname === "/index.html" ? "!opacity-100" : ""}">Home</a>
                <a href="../about-us.html" class="${pathname === "/about-us.html" ? "!opacity-100" : ""}">About US</a>
                <a href="../guide-to-care.html" class="${pathname === "/guide-to-care.html" ? "!opacity-100" : ""}">Guides to care</a>
                </div>
                <div class="flex flex-col justify-end gap-y-2 shrink-0">
                <a href="">Hospital services</a>
                <a href="">Condition and treatment</a>
                <a href="">Find a doctor</a>
                </div>
    
                <div class="flex flex-col gap-y-2 shrink-0">
                <div class="text-2xl font-bold">Contact</div>
                <a href="" class="flex items-center"><img src="./icons/map-white.svg" class="mr-2" width="18" alt="" />View google map</a>
                <a href="" class="flex items-center"><img src="./icons/phone-white.svg" class="mr-2" width="18" alt="" /></i>02-XXX-XXXX</a>
                </div>
            </section>

            <section class="flex flex-col items-center justify-between gap-6 pt-6 border-t border-white md:flex-row">
                <div>Copyright © 2021 All rights reserved.</div>
                <div class="flex flex-wrap justify-center gap-5">
                <a href="">Terms and conditions</a>
                <a href="">Privacy Policy</a>
                <a href="">Cookies policy</a>
                </div>
            </section>
        </div>
    </footer>
`;
  }
}

customElements.define("footer-component", Footer);
