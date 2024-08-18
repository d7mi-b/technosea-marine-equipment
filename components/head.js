function Head () {
    const head = document.head;

    head.innerHTML = `
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">

            <!-- Icons -->
            <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.5.1/uicons-thin-straight/css/uicons-thin-straight.css'>
            <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.5.1/uicons-regular-rounded/css/uicons-regular-rounded.css'>
            <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.5.1/uicons-brands/css/uicons-brands.css'>

            <!-- Font -->
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@200..1000&display=swap" rel="stylesheet">

            <!-- Style -->
            <link rel="stylesheet" href="/asset/styles/index.css">
        ` + head.innerHTML;
};

export default Head;
