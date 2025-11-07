
import redmi13 from "../assets/redmi_13.png";
import redmi15c from "../assets/redmi_15C.png";
import pococ85 from "../assets/Poco_C85.png";
import note14 from "../assets/note_14.png";
import note14s from "../assets/note_14s.png";
import note145g from "../assets/note_145g.png"
import pocom7pro from "../assets/poco_M7P.png"
import note14pro from "../assets/note_14p4g.png"
import pocox7 from "../assets/poco_x7.png"
import note14pro5g from "../assets/note_14p5g.png"


const produtos = [
    {
        id: "redmi13",
        name: "Redmi 13",
        storage: "128GB Memória Interna",
        ram: "12GB Ram (6+6GB expansível)",
        image: redmi13,
        price: ["💵 R$990 no dinheiro ou pix",
                "💳 R$1.049 no débito" , 
                "💳Até 12x de R$101,47 no crédito"],
        ficha: {
            tela: '6.79" FHD+ 90Hz',
            processador: "MediaTek Helio G88",
            camera: "108MP  / 13MP frontal",
            filmagens: "Full HD 1080p",
            bateria: "5030mAh com carregador 33W",
            sistema: "MIUI 14 baseado em Android 13",
            nfc: "Sim",
            ip68: "Não",
            garantia: "90 dias contra defeitos de fabricação"
        }

    },

    { id: "redmi15c",
         name: "Redmi 15C", 
         storage: "256GB Memória Interna", 
         ram: "16GB Ram (8+8GB expansível)", 
         image: redmi15c,
         price: ["💵 R$1.179 no dinheiro ou pix",
                "💳 R$1.249 no débito" , 
                "💳Até 12x de R$120,80 no crédito"],
        ficha: {
            tela: '6.9" LCD 120Hz',
            processador: "MediaTek Helio G81 Ultra",
            camera: "50MP  / 8MP frontal",
            filmagens: "Full HD 1080p",
            bateria: "6000mAh com carregador 33W",
            sistema: "HyperOS baseado em Android 15",
            nfc: "Não",
            ip68: "Não",
            garantia: "90 dias contra defeitos de fabricação"
        }
 },
    
    
    
         { id: "pococ85",
             name: "Poco C85", 
             storage: "256GB Memória Interna", 
             ram: "16GB Ram (8+8GB expansível)", 
             image: pococ85,
            price: ["💵 R$1.234 no dinheiro ou pix",
                "💳 R$1.299 no débito" , 
                "💳Até 12x de R$125,73 no crédito"],
        ficha: {
            tela: '6.9" LCD 120Hz',
            processador: "MediaTek Helio G81 Ultra",
            camera: "50MP / 8MP frontal",
            filmagens: "Full HD 1080p",
            bateria: "6000mAh com carregador 33W",
            sistema: "HyperOs baseado em Android 15",
            nfc: "Sim",
            ip68: "Não",
            garantia: "90 dias contra defeitos de fabricação"
        }
 },
    
    
    
         { id: "note14", 
            name: "Note 14", 
            storage: "256GB Memória Interna", 
            ram: "16GB Ram (8+8GB expansível)", 
            image: note14,
            price: ["💵 R$1.399 no dinheiro ou pix",
                "💳 R$1.499 no débito" , 
                "💳Até 12x de R$145,04 no crédito"],
        ficha: {
            tela: '6.67" AMOLED 120Hz',
            processador: "MediaTek Helio G99 Ultra",
            camera: "108MP / 20MP frontal",
            filmagens: "Full HD 1080p",
            bateria: "5500mAh com carregador 33W",
            sistema: "HyperOS 14 baseado em Android 14",
            nfc: "Não",
            ip68: "Não",
            garantia: "90 dias contra defeitos de fabricação"
        }
 },
   
   
   
         { id: "note14s", 
            name: "Note 14S", 
            storage: "256GB Memória Interna", 
            ram: "16GB Ram (8+8GB expansível)", 
            image: note14s,
        price: ["💵 R$1.599 no dinheiro ou pix",
                "💳 R$1.699 no débito" , 
                "💳Até 12x de R$164,23 no crédito"],
        ficha: {
            tela: '6.67" AMOLED 120Hz',
            processador: "MediaTek Helio G99 Ultra",
            camera: "200MP / 16MP frontal",
            filmagens: "Full HD 1080p",
            bateria: "5000mAh com carregador 67W",
            sistema: "HyperOS baseado em Android 14",
            nfc: "Não",
            ip68: "Não",
            garantia: "90 dias contra defeitos de fabricação"
        }
 },
    
    
         { id: "note145g ", 
            name: "Note 14 5G", 
            storage: "256GB Memória Interna", 
            ram: "16GB Ram (8+8GB expansível)", 
            image: note145g,
        price: ["💵 R$1.699 no dinheiro ou pix",
                "💳 R$1.799 no débito" , 
                "💳Até 12x de R$173,95 no crédito"],
        ficha: {
            tela: '6.67" AMOLED 120Hz',
            processador: "MediaTek Dimensity 7025 Ultra",
            camera: "108MP / 20MP frontal",
            filmagens: "Full HD 1080p",
            bateria: "5110mAh com carregador 33W",
            sistema: "HyperOs baseado em Android 14",
            nfc: "Sim",
            ip68: "Não",
            garantia: "90 dias contra defeitos de fabricação"
        }
 },
    
    
    
         { id: "pocom7pro", 
            name: "Poco M7 PRO 5G", 
            storage: "512GB Memória Interna", 
            ram: "24GB Ram (12+12GB expansível)", 
            image: pocom7pro,
        price: ["💵 R$1.849 no dinheiro ou pix",
                "💳 R$1.949 no débito" , 
                "💳Até 12x de R$188,42 no crédito"],
        ficha: {
           tela: '6.67" AMOLED 120Hz',
            processador: "MediaTek Dimensity 7025 Ultra",
            camera: "108MP / 20MP frontal",
            filmagens: "Full HD 1080p",
            bateria: "5110mAh com carregador 33W",
            sistema: "HyperOs baseado em Android 14",
            nfc: "Sim",
            ip68: "Não",
            garantia: "90 dias contra defeitos de fabricação"
        }
 },
    
    
         { id: "note14pro", 
            name: "Note 14 PRO", 
            storage: "256GB Memória Interna", 
            ram: "16GB Ram (8+8GB expansível)", 
            image: note14pro,
        price: ["💵 R$1.899 no dinheiro ou pix",
                "💳 R$1.999 no débito" , 
                "💳Até 12x de R$193,34 no crédito"],
        ficha: {
           tela: '6.67" AMOLED 120Hz',
            processador: "MediaTek Helio G100 Ultra",
            camera: "200MP / 16MP frontal",
            filmagens: "Full HD 1080p",
            bateria: "5110mAh com carregador 45W",
            sistema: "HyperOs baseado em Android 14",
            nfc: "Sim",
            ip68: "Não",
            garantia: "90 dias contra defeitos de fabricação"
        }
         },
    
         { id: "pocox7", 
            name: "Poco X7 5G", 
            storage: "512GB Memória Interna ", 
            ram: "24GB Ram (12+12GB expansível)", 
            image: pocox7,
        price: ["💵 R$1.999 no dinheiro ou pix",
                "💳 R$2.099 no débito" , 
                "💳Até 12x de R$202,89 no crédito"],
        ficha: {
           tela: '6.67" AMOLED 120Hz',
            processador: "MediaTek Helio G100 Ultra",
            camera: "50MP / 16MP frontal",
            filmagens: "4K a 30fps",
            bateria: "5110mAh com carregador 45W",
            sistema: "HyperOs baseado em Android 14",
            nfc: "Sim",
            ip68: "Sim",
            garantia: "90 dias contra defeitos de fabricação"
        }
         },
   
         { id: "note14pro5g", 
            name: "Note 14 PRO 5G", 
            storage: "256GB Memória Interna ", 
            ram: "16GB Ram", 
            image: note14pro5g,
        price: ["💵 R$2.080 no dinheiro ou pix",
                "💳 R$2.199 no débito" , 
                "💳Até 12x de R$212,62 no crédito"],
        ficha: {
           tela: '6.67" AMOLED 120Hz',
            processador: "MediaTek Dimensity 7300 Ultra",
            camera: "2000MP / 16MP frontal",
            filmagens: "4K a 30fps",
            bateria: "5110mAh com carregador 45W",
            sistema: "HyperOs baseado em Android 14",
            nfc: "Sim",
            ip68: "Sim",
            garantia: "90 dias contra defeitos de fabricação"
        } },
];

export default produtos;