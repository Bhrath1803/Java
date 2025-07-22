package controller;

import ch.qos.logback.core.model.Model;
import entity.Product;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import service.ProductService;

@Controller
public class ProductController {
    private final ProductService productService;

    public ProductController(ProductService productService){
        this.productService=productService;
    }

    @GetMapping("/")
    public String home(){
        return "home";
    }

    @GetMapping("/add")
    public String showAddProductForm(Model model){
    //    model.addText("product", new Product());
        return "add-product";
    }
    @PostMapping("/add")
    public String addProduct(@ModelAttribute Product product){
        productService.saveProduct(product);
        return "redirect:/";
    }
    @GetMapping("/products")
    public String showAllProducts(Model model){
     //   model.addAttibute("products", productService.getAllProducts());
        return "display-products";
    }
}
