# FLUXO:

- EXTRAIR FUNCAO DO RENDER E USAR ESTA FUNCAO NO EXPECT

---

# FUNCOES NO RENDER ()

- RENDER PARA RENDERIZAR O COMPONENTE E DELE EXTRAIMOS AS FUNCOES
- > FUNCAO DEBUG()
  > DEBUG() SÓ PRA MOSTRAR NO CONSOLE O QUE FOI RENDERIZADO:

```
const { debug } = render(<App />)
    // debug()
```

---

# COMANDOS DE TEST

- USAMOS AS FUNCOES DE TEST - APOS O EXPECT USAR AS FUNCOES DE DENTRO DO RENDER:
- toBeInTheDocument() // QUE ESTE TEXTO ESTEJA EM TELA
