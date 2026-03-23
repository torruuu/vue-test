import { createI18n } from "vue-i18n"

const messages = {
  es: {
    createProduct: {
      back: "Volver a la tienda",
      title: "Crear producto",
      name: "Nombre",
      namePlaceholder: "Nombre del producto",
      description: "Descripción",
      descriptionPlaceholder: "Descripción del producto",
      price: "Precio (€)",
      pricePlaceholder: "0.00",
      stock: "Stock",
      stockPlaceholder: "0",
      category: "Categoría",
      categoryPlaceholder: "Categoría",
      submit: "Crear producto",
      submitting: "Creando...",
      successToast: "Producto creado correctamente!",
      errorToast: "Error al crear el producto.",
    },
  },
  en: {
    createProduct: {
      back: "Back to store",
      title: "Create product",
      name: "Name",
      namePlaceholder: "Product name",
      description: "Description",
      descriptionPlaceholder: "Product description",
      price: "Price (€)",
      pricePlaceholder: "0.00",
      stock: "Stock",
      stockPlaceholder: "0",
      category: "Category",
      categoryPlaceholder: "Category",
      submit: "Create product",
      submitting: "Creating...",
      successToast: "Product created successfully!",
      errorToast: "Error creating the product.",
    },
  },
}

const i18n = createI18n({
  locale: "es",
  fallbackLocale: "en",
  messages,
})

export default i18n
