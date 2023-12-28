from django.db import models

class Sale(models.Model):


    end_year=models.CharField(max_length=100,null=True)
    intensity =models.IntegerField(null=True)
    sector=models.CharField(max_length=100,null=True,blank=True)
    topic=models.CharField(max_length=100,null=True,blank=True)
    insight=models.CharField(max_length=100,null=True,blank=True)
    url=models.CharField(max_length=100,null=True,blank=True)
    region=models.CharField(max_length=100,null=True,blank=True)
    start_year=models.CharField(max_length=100,null=True,blank=True)
    impact=models.CharField(max_length=100,null=True,blank=True)
    added=models.CharField(max_length=100,null=True,blank=True)
    published=models.CharField(max_length=100,null=True,blank=True)
    country=models.CharField(max_length=100,null=True,blank=True)
    relevance=models.IntegerField(null=True)
    pestle=models.CharField(max_length=100,null=True,blank=True)
    source=models.CharField(max_length=100,null=True,blank=True)
    title=models.CharField(max_length=100,null=True,blank=True)
    likelihood=models.IntegerField(null=True)


    def __str__(self):
        return self.end_year
