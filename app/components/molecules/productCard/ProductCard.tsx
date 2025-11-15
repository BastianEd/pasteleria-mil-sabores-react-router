// app/components/molecules/productCard/ProductCard.tsx
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "~/components/atoms/button/Button";
import type { Product } from "~/types";

interface ProductCardProps {
    product: Product;
    onAddToCart?: (product: Product) => void;
}

/**
 * Card de producto de la pastelería.
 * Esto es una "molecule" porque combina varios atoms:
 * - Imagen
 * - Textos
 * - Botón
 */
const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
    const handleAddToCart = () => {
        // Si me pasan la función, la ejecuto
        if (onAddToCart) {
            onAddToCart(product);
        }
    };

    return (
        <Card
            // Card de MUI para que se vea decente sin pelearme con CSS desde cero
            sx={{ maxWidth: 345 }}
        >
            {product.imagenUrl && (
                <CardMedia
                    component="img"
                    height="180"
                    image={product.imagenUrl}
                    alt={product.nombre}
                />
            )}
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    {product.nombre}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {product.descripcion}
                </Typography>
                <Typography variant="body1" sx={{ mt: 1, fontWeight: "bold" }}>
                    {/* Formateo el precio a CLP basicamente */}
                    ${product.precio.toLocaleString("es-CL")}
                </Typography>
                {product.stock <= 0 ? (
                    <Typography variant="body2" color="error">
                        Sin stock
                    </Typography>
                ) : (
                    <Typography variant="body2" color="text.secondary">
                        Stock: {product.stock} unidades
                    </Typography>
                )}
            </CardContent>
            <CardActions>
                <Button
                    // Botón para agregar al carrito
                    onClick={handleAddToCart}
                    disabled={product.stock <= 0}
                >
                    Agregar al carrito
                </Button>
            </CardActions>
        </Card>
    );
};

export default ProductCard;
