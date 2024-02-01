import { Test, TestingModule } from '@nestjs/testing';
import { ProductInventoryController } from './product_inventory.controller';

describe('ProductInventoryController', () => {
  let controller: ProductInventoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductInventoryController],
    }).compile();

    controller = module.get<ProductInventoryController>(ProductInventoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
