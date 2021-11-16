"use strict";
// https://www.terraform.io/docs/providers/aws/r/ses_template.html
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
exports.SesTemplate = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ses_template.html aws_ses_template}
*/
var SesTemplate = /** @class */ (function (_super) {
    __extends(SesTemplate, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ses_template.html aws_ses_template} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SesTemplateConfig
    */
    function SesTemplate(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_ses_template',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._html = config.html;
        _this._name = config.name;
        _this._subject = config.subject;
        _this._text = config.text;
        return _this;
    }
    Object.defineProperty(SesTemplate.prototype, "arn", {
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
    Object.defineProperty(SesTemplate.prototype, "html", {
        get: function () {
            return this.getStringAttribute('html');
        },
        set: function (value) {
            this._html = value;
        },
        enumerable: false,
        configurable: true
    });
    SesTemplate.prototype.resetHtml = function () {
        this._html = undefined;
    };
    Object.defineProperty(SesTemplate.prototype, "htmlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._html;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SesTemplate.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SesTemplate.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SesTemplate.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SesTemplate.prototype, "subject", {
        get: function () {
            return this.getStringAttribute('subject');
        },
        set: function (value) {
            this._subject = value;
        },
        enumerable: false,
        configurable: true
    });
    SesTemplate.prototype.resetSubject = function () {
        this._subject = undefined;
    };
    Object.defineProperty(SesTemplate.prototype, "subjectInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._subject;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SesTemplate.prototype, "text", {
        get: function () {
            return this.getStringAttribute('text');
        },
        set: function (value) {
            this._text = value;
        },
        enumerable: false,
        configurable: true
    });
    SesTemplate.prototype.resetText = function () {
        this._text = undefined;
    };
    Object.defineProperty(SesTemplate.prototype, "textInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._text;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    SesTemplate.prototype.synthesizeAttributes = function () {
        return {
            html: cdktf.stringToTerraform(this._html),
            name: cdktf.stringToTerraform(this._name),
            subject: cdktf.stringToTerraform(this._subject),
            text: cdktf.stringToTerraform(this._text)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    SesTemplate.tfResourceType = "aws_ses_template";
    return SesTemplate;
}(cdktf.TerraformResource));
exports.SesTemplate = SesTemplate;
