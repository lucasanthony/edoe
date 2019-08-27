package com.edoe.Util;

import java.util.Comparator;

import com.edoe.Model.Item;

public class QuantidadeComparator implements Comparator<Item> {

	public int compare(Item item1, Item item2) {
		Integer quant1 = item1.getQuantidade();
		Integer quant2 = item2.getQuantidade();
		return quant1.compareTo(quant2);
	}






}
