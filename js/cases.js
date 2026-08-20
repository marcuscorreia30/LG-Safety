const filters = document.querySelectorAll(".case-filter");
const cases = document.querySelectorAll(".case-card");


filters.forEach(function(filter) {

    filter.addEventListener("click", function() {

        // Remove o active de todos
        filters.forEach(function(item) {
            item.classList.remove("active");
        });


        // Ativa o botão clicado
        filter.classList.add("active");


        const category = filter.dataset.filter;


        cases.forEach(function(caseItem) {

            const caseCategory =
                caseItem.dataset.category;


            if (
                category === "todos" ||
                category === caseCategory
            ) {

                caseItem.style.display = "grid";

            } else {

                caseItem.style.display = "none";

            }

        });

    });

});