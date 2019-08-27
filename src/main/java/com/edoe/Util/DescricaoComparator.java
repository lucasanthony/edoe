package com.edoe.Util;

import java.util.Comparator;

import com.edoe.Model.Item;

public class DescricaoComparator implements Comparator<Item> {

	@Override
	public int compare(Item item1, Item item2) {
		return item1.getDescricao().compareTo(item2.getDescricao());
	}

}
