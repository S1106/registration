import fs, { appendFile } from 'fs';
import fonter from "gulp-fonter";
import ttf2woff2 from "gulp-ttf2woff2";

export const otfToTtf = () => {
    return app.gulp.src(`${app.path.srcFolder}/fonts/*.otf`, {})
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "Ошибка Fonts",
                message: "Ошибка по адресу: <%= error.message %>"
            })))
        .pipe(fonter({
            formats: ['ttf']
        }))
        .pipe(app.gulp.dest(`${app.path.srcFolder}/fonts/`))
}

export const ttfToWoff = () => {
    return app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`, {})
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "Ошибка Fonts",
                message: "Ошибка по адресу: <%= error.message %>"
            })))
        .pipe(fonter({
            formats: ['woff']
        }))
        .pipe(app.gulp.dest(`${app.path.build.fonts}`))
        .pipe(app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`))
        .pipe(ttf2woff2())
        .pipe(app.gulp.dest(`${app.path.build.fonts}`))
}

export const fontsStyle = () => {
            let fontsFile = `${app.path.srcFolder}/scss/fonts.scss`;
            fs.readdir(app.path.build.fonts,function(err,fontsFiles) {
                if(fontsFiles) {
                    if(!fs.existsSync(fontsFile)) {
                    fs.writeFile(fontsFile,'',cb);
                    let newFileOnly;
                    for(var i=0; i < fontsFiles.length;i++) {
                        let FontFileName = fontFiles[i].split('.')[0];
                        if(newFileOnly !== FontFileName) {
                            let fontName = FontFileName.split('-')[0] ? FontFileName.split('-')[0]:FontFileName;
                            let fontWeight = FontFileName.split('-')[1] ? FontFileName.split('-')[1]:FontFileName;
                            if (fontWeight.toLowerCase() === 'thin') {
                                fontWeight = 100;
                            }
                            if (fontWeight.toLowerCase() === 'extralight') {
                                fontWeight = 200;
                            }
                            if (fontWeight.toLowerCase() === 'light') {
                                fontWeight = 300;
                            }
                            if (fontWeight.toLowerCase() === 'medium') {
                                fontWeight = 500;
                            }
                            if (fontWeight.toLowerCase() === 'semibold') {
                                fontWeight = 600;
                            }
                            if (fontWeight.toLowerCase() === 'bold') {
                                fontWeight = 700;
                            }
                            if (fontWeight.toLowerCase() === 'extrabold') {
                                fontWeight = 800;
                            }
                            if (fontWeight.toLowerCase() === 'black') {
                                fontWeight = 900;
                            }
                            else {
                                fontWeight = 400;
                            }
                            fs.appendFile(fontsFile,
                                `@font-face {
                                    font-family: ${fontName};
                                    font-display:swap;
                                    src: url("../fonts/${FontFileName}.woff2") format("woff2"), url("../fonts/${FontFileName}");
                                    font-weight: ${fontWeight};
                                    font-style:normal;
                                }\r\n`,cb);

                            newFileOnly = FontFileName;
                        }
                    }
                } else {
                    console.log("файл fonts уже существует")
                }
            }
        });

        return app.gulp.src(`${app.path.srcFolder}`);
        function cb() {}
    }

// export function fontsStyle(params) {

//     let file_content = fs.readFileSync(app.path.build.fonts + '/scss/fonts.scss');
//     if (file_content == '') {
//         fs.writeFile(app.path.build.fonts + '/scss/fonts.scss', '', cb);
//         return fs.readdir(path.build.fonts, function (err, items) {
//             if (items) {
//                 let c_fontname;
//                 for (var i = 0; i < items.length; i++) {
//                     let fontname = items[i].split('.');
//                     fontname = fontname[0];
//                     if (c_fontname != fontname) {
//                         fs.appendFile(source_folder + '/scss/fonts.scss', '@include font("' + fontname + '", "' + fontname + '", "400", "normal");\r\n', cb);
//                     }
//                     c_fontname = fontname;
//                 }
//             }
//         })
//     }
// }

// function cb() { }
