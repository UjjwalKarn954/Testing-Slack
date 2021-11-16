"use strict";
// https://www.terraform.io/docs/providers/aws/d/ssm_document.html
// generated from terraform resource schema
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.DataAwsSsmDocument = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/ssm_document.html aws_ssm_document}
*/
var DataAwsSsmDocument = /** @class */ (function (_super) {
    __extends(DataAwsSsmDocument, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ssm_document.html aws_ssm_document} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsSsmDocumentConfig
    */
    function DataAwsSsmDocument(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_ssm_document',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._documentFormat = config.documentFormat;
        _this._documentVersion = config.documentVersion;
        _this._name = config.name;
        return _this;
    }
    Object.defineProperty(DataAwsSsmDocument.prototype, "arn", {
        // ==========
        // ATTRIBUTES
        // ==========
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsSsmDocument.prototype, "content", {
        // content - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('content');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsSsmDocument.prototype, "documentFormat", {
        get: function () {
            return this.getStringAttribute('document_format');
        },
        set: function (value) {
            this._documentFormat = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsSsmDocument.prototype.resetDocumentFormat = function () {
        this._documentFormat = undefined;
    };
    Object.defineProperty(DataAwsSsmDocument.prototype, "documentFormatInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._documentFormat;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsSsmDocument.prototype, "documentType", {
        // document_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('document_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsSsmDocument.prototype, "documentVersion", {
        get: function () {
            return this.getStringAttribute('document_version');
        },
        set: function (value) {
            this._documentVersion = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsSsmDocument.prototype.resetDocumentVersion = function () {
        this._documentVersion = undefined;
    };
    Object.defineProperty(DataAwsSsmDocument.prototype, "documentVersionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._documentVersion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsSsmDocument.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsSsmDocument.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsSsmDocument.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsSsmDocument.prototype.synthesizeAttributes = function () {
        return {
            document_format: cdktf.stringToTerraform(this._documentFormat),
            document_version: cdktf.stringToTerraform(this._documentVersion),
            name: cdktf.stringToTerraform(this._name)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsSsmDocument.tfResourceType = "aws_ssm_document";
    return DataAwsSsmDocument;
}(cdktf.TerraformDataSource));
exports.DataAwsSsmDocument = DataAwsSsmDocument;
