let pathname = window.location.pathname;

const guideToCarePath = [];
const hospitalServicePath = ["/outpatient-services.html"];
const treatmentPath = ["/depression.html"];

class Navbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ `
    <!-- Top Navigation Bar -->
    <nav id="top-nav" class="fixed top-0 z-30 w-full px-5 xl:px-8">
        <section class="flex items-center justify-between py-4 border-b">
        <a href="../index.html">
            <img src="./images/logo.png" alt="" width="260" height="63" class="w-[200px] max-w-[35vw]" />
        </a>
        <!-- Desktop -->
        <div class="items-center hidden xl:flex gap-x-4">
            <div class="flex social-link text-deep-blue gap-x-2">
            <a href="" class="flex items-center justify-center w-10 h-10 border rounded-full border-deep-blue">
                <i class="fa-brands fa-facebook"></i>
            </a>
            <a href="" class="flex items-center justify-center w-10 h-10 border rounded-full border-deep-blue">
                <i class="fa-brands fa-twitter"></i>
            </a>
            <a href="" class="flex items-center justify-center w-10 h-10 border rounded-full border-deep-blue">
                <i class="fa-brands fa-youtube"></i>
            </a>
            <a href="" class="flex items-center justify-center w-10 h-10 border rounded-full border-deep-blue">
                <i class="fa-brands fa-line"></i>
            </a>
            </div>
            <a href="" class="px-4 font-bold orange-link border-x-1"> <i class="mr-1 fa-solid fa-phone"></i> 08-XXX-XXXX</a>
            <a href="" class="font-medium deep-blue-link flex items-center space-x-1.5 text-sm">
            <img src="./icons/thai.png" alt="" />
            <div class="leading-3">EN</div>
            <i class="mb-1 fa-solid fa-chevron-down"></i>
            </a>
        </div>
        <!-- Mobile -->
        <div class="flex items-center text-xl xl:hidden gap-x-4">
            <a href="" class="flex items-center font-bold text-orange"> <i class="mr-1 fa-solid fa-phone"></i></a>
            <a href="" class="font-medium text-deep-blue px-4 flex items-center space-x-1.5 text-base border-x-1">
                <div class="leading-3">EN</div>
                <i class="mb-1 fa-solid fa-chevron-down"></i
            ></a>
            <button id="open-side-nav-button" class="flex items-center text-3xl text-deep-blue">
            <i class="fa-solid fa-bars"></i>
            </button>
        </div>
        </section>

        <div class="items-center justify-between hidden py-3 xl:flex">
        <div class="page-nav-menu text-deep-blue [&_*]:font-medium [&>*]:p-4 flex whitespace-nowrap">
            <a href="../index.html" class="${pathname === "/index.html" && "active"}">Home</a>
            <a href="../about-us.html" class="${pathname === "/about-us.html" && "active"}">About us</a>
            <div class="sub-menu-wrapper ${guideToCarePath.includes(pathname) && "active"}">
                <button >
                    Guides to care
                    <i class="mb-1 ml-1 text-sm fa-solid fa-chevron-down"></i>
                </button>
                <div class="sub-menu">
                    <a href="">Hospital Structural Giude</a>
                    <a href="">Arrival Guide</a>
                    <a href="">Admission Guide</a>
                    <a href="">Information for Families</a>
                </div>
            </div>
            <div class="sub-menu-wrapper ${hospitalServicePath.includes(pathname) && "active"}">
                <button>
                    Hospital Services
                    <i class="mb-1 ml-1 text-sm fa-solid fa-chevron-down"></i>
                </button>
                <div class="sub-menu">
                    <a href="../outpatient-services.html" class="${pathname === "/outpatient-services.html" && "active"}">Outpatient Services</a>
                    <a href="">Inpatient Services</a>
                    <a href="">Child Development Program</a>
                    <a href="">Daily Activities</a>
                    <a href="">Psychological Text</a>
                    <a href="">Coperate Service</a>
                    <a href="">School Services</a>
                </div>
            </div>
            <div class="sub-menu-wrapper ${treatmentPath.includes(pathname) && "active"}">
                <button>
                    Condition and Treatment
                    <i class="mb-1 ml-1 text-sm fa-solid fa-chevron-down"></i>
                </button>
                <div class="sub-menu">
                    <a href="../depression.html" class="${pathname === "/depression.html" && "active"}">Depression</a>
                    <a href="">Generalised Anxiety Disorder</a>
                    <a href="">Schizophrenia</a>
                    <a href="">Bipolar</a>
                    <a href="">Dementia</a>
                    <a href="">Autistic Spectrum Disorder</a>
                    <a href="">Attention Deficit Hyperactivity Disorder (ADHD)</a>
                    <a href="">Panic Disorder</a>
                    <a href="">Post-traumatic Stress Disorder (PTSD)</a>
                </div>
            </div>

            <div class="sub-menu-wrapper">
                <button>
                    Health information
                    <i class="mb-1 ml-1 text-sm fa-solid fa-chevron-down"></i>
                </button>
                <div class="sub-menu">
                    <a href="">Mental Health Infomation</a>
                    <a href="">Patient Stories</a>
                </div>
            </div>
            <a href="">Find a doctor</a>
            <button>
                <i class="fa-solid fa-magnifying-glass"></i>
            </button>
        </div>

        <button class="text-lg font-medium btn-orange leading-[1.2]">Make an Appointment</button>
        </div>
    </nav>

    <!-- Mobile Side Navigation -->
    <section id="side-nav-wrapper" class=" opacity-0 fixed w-full h-full bg-[rgba(103,195,221,0.5)] z-40 top-0 flex justify-end">
        <aside id="side-nav" class="relative w-full h-full p-10 overflow-y-auto bg-white md:w-1/2 xl:max-w-[40vw]">
        <button id="close-side-nav-button" class="absolute top-5 right-10 p-2 z-10">
            <img src="./icons/close-blue.svg" alt="" width="32" />
        </button>
        <section class="border-b pb-8 mb-8 text-light-blue [&_*]:font-medium flex flex-col text-xl whitespace-nowrap space-y-10">
            <a href="../index.html">Home</a>
            <a href="../about-us.html">About us</a>
            <div class="collapsible">
                <button>
                    Guides to care
                    <i class="mb-1 ml-1 text-lg fa-solid fa-chevron-down"></i>
                </button>
                <div class="collapsible-content-wrapper">
                    <div class="collapsible-content gap-y-6">
                    <a href="">Hospital Structural Giude</a>
                    <a href="">Arrival Guide</a>
                    <a href="">Admission Guide</a>
                    <a href="">Information for Families</a>
                    </div>
                </div>
            </div>
            <div class="collapsible">
                <button>
                    Hospital Services
                    <i class="mb-1 ml-1 text-lg fa-solid fa-chevron-down"></i>
                </button>
                <div class="collapsible-content-wrapper">
                    <div class="collapsible-content gap-y-6">
                    <a href="../outpatient-services.html">Outpatient Services</a>
                    <a href="">Inpatient Services</a>
                    <a href="">Child Development Program</a>
                    <a href="">Daily Activities</a>
                    <a href="">Psychological Text</a>
                    <a href="">Coperate Service</a>
                    <a href="">School Services</a>
                    </div>
                </div>
            </div>
            <div class="collapsible">
                <button>
                    Condition and Treatment
                    <i class="mb-1 ml-1 text-lg fa-solid fa-chevron-down"></i>
                </button>
                <div class="collapsible-content-wrapper">
                    <div class="collapsible-content gap-y-6">
                        <a href="../depression.html" >Depression</a>
                        <a href="">Generalised Anxiety Disorder</a>
                        <a href="">Schizophrenia</a>
                        <a href="">Bipolar</a>
                        <a href="">Dementia</a>
                        <a href="">Autistic Spectrum Disorder</a>
                        <a href="">Attention Deficit Hyperactivity Disorder (ADHD)</a>
                        <a href="">Panic Disorder</a>
                        <a href="">Post-traumatic Stress Disorder (PTSD)</a>
                    </div>
                </div>
            </div>

            <div class="collapsible">
                <button>
                    Health information
                    <i class="mb-1 ml-1 text-lg fa-solid fa-chevron-down"></i>
                </button>
                <div class="collapsible-content-wrapper">
                    <div class="collapsible-content gap-y-6">
                    <a href="">Mental Health Infomation</a>
                    <a href="">Patient Stories</a>
                    </div>
                </div>
                </div>
            <a href="">Find a doctor</a>
            <button class="w-fit">
                <i class="fa-solid fa-magnifying-glass"></i>
                Search
            </button>

            <div class="collapsible">
            <button class="flex items-center space-x-2">
                <img src="./icons/thai.png" alt="" class="mb-1" width="30" />
                <div>EN</div>
                <i class="mb-1 ml-1 text-lg fa-solid fa-chevron-down"></i>
            </button>
            <div class="collapsible-content-wrapper">
                <div class="collapsible-content gap-y-6">
                <a href="">TH</a>
                <a href="">ENG</a>
                </div>
            </div>
            </div>

            <div class="flex lg:flex-row flex-col w-full gap-y-8 gap-x-4 text-lg text-center">
                <a href="" class="flex-1 btn-orange ">Make an Appointment</a>
                <a href="" class="flex-1 btn-transparent "><i class="mr-1 fa-solid fa-phone"></i> 08-XXX-XXXX</a>
            </div>
        </section>

        <section class="flex justify-center lg:justify-start social-link text-deep-blue gap-x-3">
            <a href="" class="flex items-center justify-center border rounded-full w-11 h-11 border-deep-blue">
                <i class="fa-brands fa-facebook"></i>
            </a>
            <a href="" class="flex items-center justify-center border rounded-full w-11 h-11 border-deep-blue">
                <i class="fa-brands fa-twitter"></i>
            </a>
            <a href="" class="flex items-center justify-center border rounded-full w-11 h-11 border-deep-blue">
                <i class="fa-brands fa-youtube"></i>
            </a>
            <a href="" class="flex items-center justify-center border rounded-full w-11 h-11 border-deep-blue">
                <i class="fa-brands fa-line"></i>
            </a>
        </section>
        </aside>
    </section>  `;
  }
}

customElements.define("navbar-component", Navbar);
