import functions_framework
from flask import jsonify, request

@functions_framework.http
def greet_user(request):
    if request.method == 'GET':
        name = request.args.get('name', 'World')
    elif request.method == 'POST':
        data = request.get_json(silent=True)
        name = data.get('name', 'World') if data else 'World'
    else:
        return jsonify({"error": "Unsupported method"}), 405

    return jsonify({"message": f"Hello, {name}!"})
