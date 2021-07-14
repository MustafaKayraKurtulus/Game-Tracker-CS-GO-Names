Selams ? 👋

Paylaştığım bu script sayesinde game tracker sitesinden cs-go verilerinden oyuncu isimlerini kolaylıkla çekebilir, kullanabilirsiniz.
Bu tarz verileri çekmek için npm üzerinde hazır bir modül aramak yerine hızlıca bunun gibi scriptler kullanabilirsiniz.

Kurulum:

dosyaları indirip "npm init"i kuruyoruz daha sonrasında npm i axios ve npm i cheerio ile 2 tane import ettiğim modülleri yüklüyoruz ve daha sonrasında bu dosyayı 
Discord Botu veya Nerede kullanacaksak kullanabiliriz.. 

Örnek Discord Botunda Kullanımı:

client.on("message", message => {
    if(message.content == '!isimler') {
      const module = require('./KLASÖR İSMİ')
async function output() {
let info = await module.get('https://www.gametracker.com/server_info/SERVER IP Sİ/')
console.log(`\`\`\`${info}\`\`\``)
}
output()
    }   
}) 

şeklinde bir event ile komutu kullanabilirsiniz.. "!isimler" yazarsanız konsola bütün isimler gelecektir..

Herhangi bir hata alırsanız veya bir sorun olursa =>
Discord: Vitraxdev ⌔#0666
bana ulaşabilirsiniz..

İyi Kullanımlar!
