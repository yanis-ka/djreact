from django.urls import path
from .views import ArticleListView, ArticleDetailView

urlpatterns = [
    path('', ArticleListView.as_view(), name='articles_list'),
    path('<id>', ArticleDetailView.as_view(), name='article'),
]
