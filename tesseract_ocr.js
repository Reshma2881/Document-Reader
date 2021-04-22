const worker = new Tesseract.TesseractWorker();
worker.recognize(file)
.progress(function(packet){
    console.info(packet)
    progressUpdate(packet)
})
.then(function(data){
    console.log(data)
    progressUpdate({ status: 'done', data: data })
})