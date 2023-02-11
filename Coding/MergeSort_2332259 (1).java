import java.util.ArrayList;
import java.util.Scanner;
public class MergeSort {
    ArrayList getInput(ArrayList<Integer> al) {
		al = new ArrayList<Integer>();
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter size of List:");
        int size= sc.nextInt();
        for (int i = 1; i <= size; i++)//loop for creating array upto size of arraylist 
        {
            System.out.println("Input element for List:");
            int element= sc.nextInt();
            al.add(element);
            
        }
        System.out.println("Unsorted List:");
        System.out.println(al);
        return al;
			
	}
	
	void getOutput(ArrayList<Integer> al) {
		System.out.println("Sorted List:" + al);
	}
	void merge(ArrayList<Integer> al, ArrayList<Integer> left, ArrayList<Integer> right) {
        int leftside = left.size();
        int rightside = right.size();
        int i = 0, j = 0, k = 0;
        //running the loop until elements of one side is finished
        while (i < leftside && j < rightside) {
            if (left.get(i) <= right.get(j)) {//checking which one side is smaller
                 al.set(k, left.get(i));
                i++;
            } else {
                al.set(k, right.get(j));
                j++;
            }
            k++;
        }
        //if the elements are left over in either sides
        while (i < leftside) {          
            al.set(k, left.get(i));     
            i++;
            k++;
        }
        while (j < rightside) {
            al.set(k, right.get(j));
            j++;
            k++;
        }
    }
    void sort(ArrayList<Integer> al) {
        ArrayList<Integer> left = new ArrayList<Integer>();
        ArrayList<Integer> right = new ArrayList<Integer>();
        int size = al.size();
        if (size == 1) {
            //when only one element is present in arraylist it is already sorted
            return;//so return the same element
        }
        int mid = size / 2;
        for (int i = 0; i < mid; i++) {
        
            left.add(al.get(i));
        }
        for (int i = mid; i < size; i++) {
            right.add(al.get(i));
        }
        sort(left); //call the sort until it convert into single list
        sort(right); 
        merge(al, left, right); //merge the divide side or list to create a sorted list
    }
    public static void main(String[] args) {
        ArrayList<Integer> al = new ArrayList<>();
        MergeSort ms = new MergeSort();
        al = ms.getInput(al);//call to ask user input
        ms.sort(al);//call to sort and merge
        ms.getOutput(al);//call to get output
    }

}
