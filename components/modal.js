class Modal extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ `
    <div id="modal" class="opacity-0 invisible fixed z-50 w-full h-full left-0 top-0 bg-black/50 flex justify-center items-center">
        <div id="modal-content" class="w-full max-w-[20rem] rounded-3xl bg-white px-5 py-7 space-y-6 text-center">
            <div class="space-y-1">
                <h4 id="modal-title" class="text-deep-blue font-bold text-xl">Update user account</h4>
                <p id="modal-desc" class="text-deep-blue"> Are you sure to update profile<br />
                this user account?</p>
            </div>

            <div class="flex gap-x-4 text-sm px-2">
                <button id="modal-cancel" class="flex-1 border border-[#ccc] py-2 rounded-full text-[#ccc]">Cancel</button>
                <a id="modal-confirm" href="" class="flex-1 bg-orange rounded-full text-white py-2">Confirm</a>
            </div>
        </div>
    </div>
  `;
  }
}

customElements.define("modal-component", Modal);
