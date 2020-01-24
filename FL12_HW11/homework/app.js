const structure = [
    {
        'folder': true,
        'title': 'Films',
        'children': [
            {
                'title': 'Iron Man.avi'
            },
            {
                'folder': true,
                'title': 'Fantasy',
                'children': [
                    {
                        'title': 'The Lord of the Rings.avi'
                    },
                    {
                        'folder': true,
                        'title': 'New folder 1',
                        'children': false
                    }
                ]
            }
        ]
    },
    {
        'folder': true,
        'title': 'Documents',
        'children': [
            {
                'folder': true,
                'title': 'EPAM Homework answers',
                'children': null
            }
        ]
    }
];

const rootNode = document.getElementById('root');

function createFolder(level) {
    let folder = document.createElement('div'),
        folderName = document.createElement('p'),
        subfolder = document.createElement('div'),
        file = document.createElement('div'),
        textnode = document.createTextNode(level.title),
        empty = document.createElement('div');

    folderName.appendChild(textnode);//назва поточної папки
    folder.className += 'folder';//стилі для поточної папки
    folderName.className += 'folderName';//стилі для назви поточної папки
    subfolder.className += 'subfolder';//та частина папки, що відкривається при кліку
    folder.appendChild(folderName);//додали назву папки
    empty.className += 'emptyMessage';
    empty.innerHTML = 'the folder is empty';
//adding subfolders to folder
    if (level.folder) {
        if (level.children) {
            level.children.forEach((item) => {
                subfolder.appendChild(createFolder(item))
            });
        } else {
            subfolder.appendChild(empty);
        }
        folder.appendChild(subfolder);
        return folder
    } else if (!level.folder && level.title) { // file creation
        file.className += 'file';
        file.appendChild(textnode);
        folder.appendChild(file);
        return file
    }
}//end Create folder

structure.forEach((item) => { //file tree creation
    rootNode.appendChild(createFolder(item))
});
//folder open/close
let folders = document.getElementsByClassName('folderName');

for (let f = 0; f < folders.length; f++) {
    folders[f].addEventListener('click', function () {
        this.classList.toggle('active');
        let clickedSubfolder = this.nextSibling;
        clickedSubfolder.classList.toggle('open');
    })
}


