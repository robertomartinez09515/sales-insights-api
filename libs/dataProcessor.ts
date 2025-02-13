export function processSalesData(sales: { category: string; amount: number }[]) {
    const categorySales: Record<string, number> = {};
  
    sales.forEach(({ category, amount }) => {
      categorySales[category] = (categorySales[category] || 0) + amount;
    });
  
    const bestCategory = Object.keys(categorySales).reduce((a, b) =>
      categorySales[a] > categorySales[b] ? a : b
    );
  
    return {
      totalSales: sales.reduce((sum, { amount }) => sum + amount, 0),
      averageTransaction: sales.length ? sales.reduce((sum, { amount }) => sum + amount, 0) / sales.length : 0,
      bestCategory,
      salesByCategory: categorySales,
    };
  }
  