package com.edoe.Model;

public class Matching {
	private Item item;
	private Integer pontos;

	public Matching(Item item) {
		super();
		this.item = item;
		this.pontos = 20;
	}


	public Item getItem() {
		return item;
	}

	public void setItem(Item item) {
		this.item = item;
	}

	public Integer getPontos() {
		return pontos;
	}

	public void setPontos(Integer pontos) {
		this.pontos = pontos;
	}

	@Override
	public String toString() {
		return item.getId() + " - " + item.getDescricao() + ", tags: " + item.getTags() + ", quantidade: "
				+ item.getQuantidade();
	}
}
