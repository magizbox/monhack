Classes = [
   {
      "name" : "Itertools",
      "functions": [
         {"name":"combinations","code":"[element for element in itertools.combinations('ABCD', 2)]\n=> [('A', 'B'), ('A', 'C'), ('A', 'D'), ('B', 'C'), ('B', 'D'), ('C', 'D')]\n[element for element in itertools.combinations(range(4), 3)]\n=> [(0, 1, 2), (0, 1, 3), (0, 2, 3), (1, 2, 3)]\n[element for element in itertools.combinations('AA', 1)]\n=> [('A',), ('A',)]","signature":"itertools.combinations(iterable, r)","description":"Return <b>r</b> length <tt>subsequences of elements</tt> from the input <b>iterable</b>. <tt>Combinations</tt> are emitted in <tt>lexicographic sort order</tt>. So, if the input <b>iterable</b> is <tt>sorted</tt>, the <b>combination tuples</b> will be produced in <tt>sorted order</tt>. <tt>Elements</tt> are treated as unique based on their position, not on their value. So if the input elements are <tt>unique</tt>, there will be <tt>no repeat</tt> values in each combination."},
      ]
   },
];
