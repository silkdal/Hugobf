<body>
    <div id="file-content">loading, please wait</div>
    <script type="text/javascript">
        function delayLoad(path, callback) {
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        callback(xhr.responseText)};
                    else {
                        callback(null)};
                    
                }
            };
            xhr.open("GET", path);
            xhr.send();
        }

        function setFileContent(fileData) {
            var element = document.getElementById('file-content');
            if (!fileData) {
                element.innerHTML = "error loading data";
                return;
            }

            element.innerHTML = fileData;
        }

        delayLoad("bongo_files/bongo_20M.txt", setFileContent);
    </script>
</body>