$('.convert').replaceWith(function() {
    return '<td class=' + this.className + '>' + this.value + '</td>'
})



$(document).ready(function() {
    $('#btnAdd').click(function() {
        var count = 1,
            first_row = $('#Row2');
        while (count-- > 0) first_row.clone().appendTo('#blacklistgrid');
    });
});
$(document).ready(function() {
    $('#btnAdd1').click(function() {
        var count = 1,
            first_row = $('#Row3');
        while (count-- > 0) first_row.clone().appendTo('#blacklistgrid1');
    });
});
const image_input = document.querySelector("#image_input");
image_input.addEventListener("change", function() {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        const uploaded_image = reader.result;
        document.querySelector("#display_image").style.backgroundImage = `url(${uploaded_image})`;
    });
    reader.readAsDataURL(this.files[0]);
});


AOS.init({
    offset: 400,
    duration: 4000
});