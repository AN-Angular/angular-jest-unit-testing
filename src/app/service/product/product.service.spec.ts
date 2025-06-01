
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ProductService } from './product.service';

describe('ProductService', () => {
  let service: ProductService;
  let httpMock: HttpTestingController;

  const mockResponse = {
    limit: 10,
    products: [{ id: 1, name: 'Product 1' }],
    skip: 0,
    total: 1
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductService]
    });
    service = TestBed.inject(ProductService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch product list', () => {
    service.getProductList().subscribe((data) => {
      expect(data).toEqual(mockResponse);
      expect(data.products.length).toBe(1);
      expect(data.products[0].name).toBe('Product 1');
    });

    const req = httpMock.expectOne('https://dummyjson.com/products');
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });
});