import { createI18n } from "vue-i18n"

const messages = {
  es: {
    createProduct: {
      title: "Crear producto",
      name: "Nombre",
      description: "Descripción",
      price: "Precio",
      stock: "Stock",
      category: "Categoría",
      button: "Crear producto",
      buttonLoading: "Creando...",
      success: "Producto creado correctamente",
      error: "Error al crear el producto",
      validation: "Por favor, rellena todos los campos",
    },
  },
  en: {
    createProduct: {
      title: "Create product",
      name: "Name",
      description: "Description",
      price: "Price",
      stock: "Stock",
      category: "Category",
      button: "Create product",
      buttonLoading: "Creating...",
      success: "Product created successfully",
      error: "Error creating the product",
      validation: "Please fill in all fields",
    },
  },
}

export const i18n = createI18n({
  locale: "es",
  legacy: false,
  messages,
})
