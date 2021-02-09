function limitedStock(stock: number, limit: number): number {
  if (Number(stock) <= 0) {
    return 0;
  }

  if (stock <= 1) {
    return stock;
  }

  const nesStock = stock - stock * (limit / 100);

  return Math.round(nesStock);
}

export { limitedStock };
