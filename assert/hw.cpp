#include <stdio.h>
#include <stdlib.h>

/* run this program using the console pauser or add your own getch, system("pause") or input loop */

int main(void) {
	int x,a,b,y;
	printf("�Ф��O��Jx,a,b,y����\n");
	scanf(" %d %d %d %d", &x, &a, &b, &y);
	
	int num,num2,num3;
	num = 2 * x * x - 4 * x + 1;
	printf("%d\n",num);
	num2 = a * a + b;
	printf("%d\n",num2);
	num3 = 3 * y * y + 8 * y + 4;
	printf("%d\n",num3);
	return 0;
}
