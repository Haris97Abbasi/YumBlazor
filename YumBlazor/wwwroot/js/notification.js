/* global toastr */

window.ShowToastr = (message, type) => {
    if (type == "success") {
        toastr.success(message);
    }
    if (type == "error") {
        toastr.error(message);
    }
}