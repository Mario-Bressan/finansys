import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../shared/category.service';
import {Category} from '../shared/category.model';
import {element} from 'protractor';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories: Category[] = [];
  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService.getAll().subscribe(
      categories => this.categories = categories,
      error => alert('Erro ao carregar a lista')
    )
  }

  deleteCategory(category) {
    const mustDelete = confirm('Deseja realmente excluir este item?');
    if (mustDelete)
    this.categoryService.delete(category.id).subscribe(
      // tslint:disable-next-line:no-shadowed-variable triple-equals
      () => this.categories = this.categories.filter(element => element != category),
      () => alert('Erro ao tentar excluir')
    )
  }

}
